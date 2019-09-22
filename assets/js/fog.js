class FogParticle {

    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.x = 0
        this.y = 0
    }

    setPosition(x, y) {
        this.x = x
        this.y = y
    }

    setVelocity(x, y) {
        this.xVelocity = x
        this.yVelocity = y
    }

    setImage(image) {
        this.image = image
    }

    render() {
        if (!this.image) return

        this.ctx.drawImage(
            this.image,
            this.x - this.image.width / 2,
            this.y - this.image.height / 2,
            400,
            400
        )

        this.x += this.xVelocity
        this.y += this.yVelocity

        // Check if has crossed the right edge
        if (this.x >= this.canvasWidth) {
            this.xVelocity = -this.xVelocity
            this.x = this.canvasWidth
        }
        // Check if has crossed the left edge
        else if (this.x <= 0) {
            this.xVelocity = -this.xVelocity
            this.x = 0
        }

        // Check if has crossed the bottom edge
        if (this.y >= this.canvasHeight) {
            this.yVelocity = -this.yVelocity
            this.y = this.canvasHeight
        }
        // Check if has crossed the top edge
        else if (this.y <= 0) {
            this.yVelocity = -this.yVelocity
            this.y = 0
        }
    }
}

class Fog {

    constructor({ selector, density = 50, velocity = 2, particle, bgi } = {}) {
        const canvas = document.querySelector(selector)
        const bcr = canvas.parentElement.getBoundingClientRect()
        this.ctx = canvas.getContext('2d')
        this.canvasWidth = canvas.width = bcr.width
        this.canvasHeight = canvas.height = bcr.height

        this.particleCount = density
        this.maxVelocity = velocity
        this.particle = particle
        this.bgi = bgi

        this._createParticles()
        this._setImage()

        if (!this.bgi) return

        const img = new Image()
        img.onload = () => {
            const size = coverImg(img, this.canvasWidth, this.canvasHeight)
            this.bgi = { img, w: size.w, h: size.h }
            this._render()
        }
        img.src = this.bgi
    }

    _createParticles() {
        this.particles = []

        const random = (min, max) => Math.random() * (max - min) + min

        for (let i = 0; i < this.particleCount; i++) {
            const particle = new FogParticle(this.ctx, this.canvasWidth, this.canvasHeight)

            particle.setPosition(
                random(0, this.canvasWidth),
                random(0, this.canvasHeight)
            )
            particle.setVelocity(
                random(-this.maxVelocity, this.maxVelocity),
                random(-this.maxVelocity, this.maxVelocity)
            )

            this.particles.push(particle)
        }
    }

    _setImage() {
        if (!this.particle) return

        const img = new Image()
        img.onload = () => this.particles.forEach(p => p.setImage(img))
        img.src = this.particle
    }

    _render() {
        if (this.bgi) {
            this.ctx.drawImage(this.bgi.img, 0, 0, this.bgi.w, this.bgi.h)
        } else {
            this.ctx.fillStyle = "rgba(0, 0, 0, 1)"
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
        }

        this.particles.forEach(p => p.render())

        requestAnimationFrame(this._render.bind(this))
    }
}

class Eraser {

    constructor({ bgCanvas, brushCanvas, bgi, radius = 120 } = {}) {
        bgCanvas = this.bgCanvas = document.querySelector(bgCanvas)
        this.brushCanvas = document.querySelector(brushCanvas)
        this.bgCtx = this.bgCanvas.getContext('2d')
        this.brushCtx = this.brushCanvas.getContext('2d')

        this.parentElement = this.bgCanvas.parentElement
        const bcr = this.parentElement.getBoundingClientRect()
        this.canvasWidth = this.bgCanvas.width = this.brushCanvas.width = bcr.width
        this.canvasHeight = this.bgCanvas.height = this.brushCanvas.height = bcr.height

        this.brushRadius = radius

        this.bgi = new Image()
        this.bgi.onload = this._attachEvents.bind(this)
        this.bgi.src = bgi

        this.utils = {
            distanceBetween(point1, point2) {
                return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
            },
            angleBetween(point1, point2) {
                return Math.atan2(point2.x - point1.x, point2.y - point1.y)
            },
            getMousePos(e) {
                const bcr = bgCanvas.getBoundingClientRect()
                return {
                    x: e.clientX - bcr.left,
                    y: e.clientY - bcr.top
                }
            }
        }
    }

    _attachEvents() {
        this.parentElement.addEventListener('mousemove', this._onMouseMove.bind(this))
        this.parentElement.addEventListener('mouseleave', this._onMouseLeave.bind(this))
    }

    _onMouseMove(e) {
        const currentPoint = this.utils.getMousePos(e)
        this.lastPoint = this.lastPoint || currentPoint

        const dist = this.utils.distanceBetween(this.lastPoint, currentPoint)
        const angle = this.utils.angleBetween(this.lastPoint, currentPoint)

        for (let ii = 0; ii < dist; ii += 5) {
            const x = this.lastPoint.x + (Math.sin(angle) * ii)
            const y = this.lastPoint.y + (Math.cos(angle) * ii)

            const brush = this.brushCtx.createRadialGradient(x, y, 0, x, y, this.brushRadius)
            brush.addColorStop(0, 'rgba(0, 0, 0, 1)')
            brush.addColorStop(.3, 'rgba(0, 0, 0, .1)')
            brush.addColorStop(1, 'rgba(0, 0, 0, 0)')

            this.brushCtx.fillStyle = brush
            this.brushCtx.fillRect(
                x - this.brushRadius,
                y - this.brushRadius,
                this.brushRadius * 2,
                this.brushRadius * 2
            )
        }

        this.lastPoint = currentPoint

        this.bgCtx.globalCompositeOperation = 'source-over'
        const size = coverImg(this.bgi, this.canvasWidth, this.canvasHeight)
        this.bgCtx.drawImage(this.bgi, 0, 0, size.w, size.h)
        this.bgCtx.globalCompositeOperation = 'destination-in'
        this.bgCtx.drawImage(this.brushCanvas, 0, 0)
    }

    _onMouseLeave() {
        this.lastPoint = null
    }
}

const coverImg = (img, width, height) => {
    const ratio = img.width / img.height
    let w = width
    let h = w / ratio
    if (h < height) {
        h = height
        w = h * ratio
    }
    return { w, h }
}

const bgi = 'https://images.unsplash.com/photo-1509587338471-5a4a715d3696?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a24cce12a8f4f58d35bffa6ef97ae4b&auto=format&fit=crop&w=3300&q=80'

new Fog({
    selector: '#fog',
    particle: 'https://asistapl.github.io/assets/fog-particle.png',
    density: 80,
    bgi,
})

new Eraser({
    bgCanvas: '#bg',
    brushCanvas: '#brush',
    radius: 100,
    bgi,
})
