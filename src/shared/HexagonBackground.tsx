import { RefObject, useEffect, useRef } from "react"

export default function HexagonBackground(){
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);
    const sideLength: number = 50;
    const lineThickess: number = 2;
    const color: string = "green";

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if(!ctx) return;
        
        // Each angle in a hexagon 2PI/3 radians. Subtracting PI/2 gets us PI/6
        const hexagonSin: number = Math.sin((Math.PI)/6);
        const hexagonCos: number = Math.cos((Math.PI)/6);

        const canvasWidth: number = canvas.width;
        const canvasHeight: number = canvas.width;

        const startingX: number = 0;
        const startingY: number = 0;

        let currentY: number = startingX;
        let currentX: number = startingY;

        let currentRow: number = 0;

        let pointingDown: boolean = true;

        ctx.strokeStyle = color;
        ctx.lineWidth = lineThickess;
        ctx.beginPath();

        // Draw rows of hexagons across the height of the canvas
        while(currentY <= canvasHeight){
            currentY = currentRow * (sideLength + sideLength * hexagonSin)
            currentX = currentRow % 2 == 0 ? 0 : -sideLength * hexagonCos 
            pointingDown = true
            ctx.moveTo(currentX, currentY)

            // Draw half hexagon shapes across the width of the canvas
            while(currentX <= canvasWidth){
                currentX += hexagonCos * sideLength;
                // Adjust currentY based on whether the line segment being drawn is pointing up or down
                currentY += hexagonSin * sideLength * (pointingDown?1:-1);
                ctx.lineTo(currentX, currentY)
                ctx.stroke()
                // If the line segment is pointing down, draw a side
                if(pointingDown){
                    ctx.lineTo(currentX, currentY + sideLength)
                    ctx.stroke()
                    ctx.moveTo(currentX, currentY)
                }
                pointingDown = !pointingDown
            }

            currentRow++
        }

    },[])

    return (
    <>
        <canvas
        ref={canvasRef}
        width={500}
        height={200}
        style={{ border: '1px solid black' }}
        />    
    </>
    )
}