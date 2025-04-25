import { RefObject, useEffect, useRef } from "react"
import "./hexagonBackground.css"

type componentProps = {
    className?: string,
    sideLength?: number,
    lineThickness?: number,
    inverted?: boolean
}
export default function HexagonBackground(props: componentProps){
    const canvasContainerRef: RefObject<HTMLDivElement | null> = useRef(null)
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);
    const factor = 1.5 // This decides when to redraw the hexagons for screenSizes
    const sideLength: number = props.sideLength??20;
    const lineThickess: number = props.lineThickness??3;
    let color: string = "black";
    const inverted: boolean = props.inverted??false;

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if(!ctx) return;
        const canvasContainer: HTMLDivElement | null = canvasContainerRef.current
        if(!canvasContainer) return

        let cssColor = getComputedStyle(canvasContainer).getPropertyValue('color').trim();
        if(cssColor) color = cssColor;

        // Initial hexagon draw
        drawHexagons(canvas, ctx, canvasContainer.clientWidth, canvasContainer.clientHeight)
        
        // Redraw the hexagons when the element is resized
        const observer = new ResizeObserver(() => {
            let newWidth: number | null = null
            let newheight: number | null = null

            const widthResizeUp = canvasContainer.clientWidth > canvas.width
            if(widthResizeUp) newWidth = canvasContainer.clientWidth * factor
            const heightResizeUp = canvasContainer.clientHeight > canvas.height
            if(heightResizeUp) newheight = canvasContainer.clientHeight * factor

            const widthResizeDown = (canvasContainer.clientWidth * factor) < canvas.width
            if(widthResizeDown) newWidth = canvasContainer.clientWidth
            const heightResizeDown = (canvasContainer.clientHeight * factor) < canvas.height
            if(heightResizeDown) newheight = canvasContainer.clientHeight

            if(newWidth || newheight){
                newWidth ??= canvasContainer.clientWidth
                newheight ??= canvasContainer.clientHeight
                drawHexagons(canvas, ctx, newWidth, newheight)
            }
        });
        observer.observe(canvasContainer);
        return () => observer.disconnect();
    },[])
    
    
    function drawHexagons(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number){
        // Set the canvas's width and heigh based off of the browser computed width and height
        canvas.width = width;
        canvas.height = height;
        
        // Clear the canvas
        if(inverted){
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Each angle in a hexagon 2PI/3 radians. Subtracting PI/2 gets us PI/6
        const hexagonSin: number = Math.sin((Math.PI)/6);
        const hexagonCos: number = Math.cos((Math.PI)/6);


        const startingX: number = 0;
        const startingY: number = 0;

        let currentY: number = startingX;
        let currentX: number = startingY;

        let currentRow: number = 0;

        let pointingDown: boolean = true;

        if(inverted){
            ctx.globalCompositeOperation = "destination-out";
            ctx.strokeStyle = "white";
        } else {
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = color;
        }

        ctx.lineWidth = lineThickess;
        ctx.beginPath();

        // Draw rows of hexagons across the height of the canvas
        while(currentY <= canvas.height){
            // Set the starting Y value based on the current row
            currentY = currentRow * (sideLength + sideLength * hexagonSin)
            // Set the starting X value based on the current row
            currentX = currentRow % 2 == 0 ? 0 : -sideLength * hexagonCos 
            // Always start a row pointing down
            pointingDown = true

            ctx.moveTo(currentX, currentY)

            // Draw half hexagon shapes across the width of the canvas
            while(currentX <= canvas.width){
                currentX += hexagonCos * sideLength;
                // Adjust currentY based on whether the line segment being drawn is pointing up or down
                currentY += hexagonSin * sideLength * (pointingDown?1:-1);
                ctx.lineTo(currentX, currentY)
                // If the line segment is pointing down, draw a side
                if(pointingDown){
                    ctx.lineTo(currentX, currentY + sideLength)
                    ctx.moveTo(currentX, currentY)
                }
                // Alternate pointing down
                pointingDown = !pointingDown
            }

            // Go to the next row
            currentRow++
        }
        ctx.stroke()
    }

    return (
    <div ref={canvasContainerRef} className={props.className}>
        <div className="hexagon-container">
            <canvas className="hexagon-canvas" ref={canvasRef} />
        </div>
    </div>
    )
}