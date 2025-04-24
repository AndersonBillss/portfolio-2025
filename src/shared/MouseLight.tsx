import { RefObject, useEffect, useRef } from "react"

type componentProps = {
    className?: string
    radius?: number
}
export default function MouseLight(props: componentProps){
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null);
    let mouseX: number = 0
    let mouseY: number = 0
    let radius: number = props.radius??100

    let color1: string = "rgba(0,0,0,0)"
    let color2: string = ""
    let color3: string = ""
    let color4: string = ""

    useEffect(() => {
        
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if(!ctx) return;
        setTimeout(() => {
            updateCanvasSize(canvas, ctx)
        })
        
        let cssColor = getComputedStyle(canvas).getPropertyValue('color').trim();
        if(cssColor) color1 = cssColor;
        const a: number = getAlpha(color1)
        color2 = setAlpha(color1, a * .333)
        color3 = setAlpha(color1, a * .1)
        color4 = setAlpha(color1, a * .033)

        const mouseEvent = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
            drawLight(canvas, ctx)
        }
        document.addEventListener("mousemove", mouseEvent)
        
        // Redraw when the element is resized
        const observer = new ResizeObserver(() => { updateCanvasSize(canvas, ctx) });
        observer.observe(canvas);
        return () => {
            observer.disconnect()
            document.removeEventListener("mousemove", mouseEvent)
        };
    },[])

    function updateCanvasSize(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
        // Set the canvas's width and heigh based off of the browser computed width and height
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        drawLight(canvas, ctx)
    }
    
    function drawLight(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rect: DOMRect = canvas.getBoundingClientRect()
        const x: number = mouseX - rect.x
        const y: number = mouseY - rect.y

        const gradient: CanvasGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(.25, color2);
        gradient.addColorStop(.5, color3);
        gradient.addColorStop(.75, color4);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    
  function setAlpha(rgba: string, alpha: number): string {
    const match = rgba.match(/rgba?\(([^)]+)\)/);
    if (!match) return rgba;

    const parts = match[1].split(",").map(p => p.trim());
    const [r, g, b] = parts;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function getAlpha(rgba: string): number {
    const match = rgba.match(/rgba?\(([^)]+)\)/);
    if (!match) return 1;

    const parts = match[1].split(",").map(p => p.trim());
    const a = parts[3];
    const aNum = Number(a)
    if(!aNum) return 1
    return aNum;
  }


    return <canvas className={props.className} ref={canvasRef} />
}