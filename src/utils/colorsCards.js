export const colorsBySpecies = (color) => {
    let colors = []
    switch (color) {
        case 'black':
            colors = ['#000000','#2B2A2A','#585252']
            break;
        case 'blue':
            colors = ['linear-gradient(120deg, #1CB5E0 0%, #000851 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'brown':
            colors = ['linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'gray':
            colors = ['radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'green':
            colors = ['linear-gradient(140deg, #c4da3d 0%, #6e7f0e 69%, #275009 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'pink':
            colors = ['linear-gradient(45deg, #ffe6f0 0%, #ffc5e0 34%, #ffa6b9 71%, #ff8a95 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'purple':
            colors = ['linear-gradient(20deg, #191919 0%, #100b32 33%, #5c0249 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'red':
            colors = ['linear-gradient(0deg, #c71800 10%, #fcc245 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'white':
            colors = ['radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
        case 'yellow':
            colors = ['linear-gradient(90deg, #ffde00 34%, #e8ff99 83%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)']
            break;
    
        default:
            break;
    }

    return colors
}