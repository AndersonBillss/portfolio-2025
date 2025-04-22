import { RefObject, useEffect, useRef } from "react"

type componentProps = {
    className?: string
    radius?: number
}
export default function MouseLight(props: componentProps){
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);
    let mouseX: number = 0
    let mouseY: number = 0
    let color: string = "black"
    let radius: number = props.radius??100

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if(!ctx) return;

        let cssColor = getComputedStyle(canvas).getPropertyValue('color').trim();
        if(cssColor) color = cssColor;

        const mouseEvent = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
            drawLight(canvas, ctx)
        }
        document.addEventListener("mousemove", mouseEvent)
        
        // Redraw when the element is resized
        const observer = new ResizeObserver(() => { drawLight(canvas, ctx) });
        observer.observe(canvas);
        return () => {
            observer.disconnect()
            document.removeEventListener("mousemove", mouseEvent)
        };
    },[])
    
    
    function drawLight(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
        // Set the canvas's width and heigh based off of the browser computed width and height
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rect: DOMRect = canvas.getBoundingClientRect()
        const x: number = mouseX - rect.x
        const y: number = mouseY - rect.y

        const gradient: CanvasGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(255,255,200,0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    return <canvas className={props.className} ref={canvasRef} />
}