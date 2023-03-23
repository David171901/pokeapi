export const colorsByType = (type: string) => {
    switch (type) {
        case 'grass':
          return ['linear-gradient(140deg, #c4da3d 0%, #6e7f0e 69%, #275009 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'fire':
          return ['linear-gradient(0deg, #c71800 10%, #fcc245 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'water':
          return ['linear-gradient(120deg, #1CB5E0 0%, #000851 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'bug':
          return ['linear-gradient(90deg, #ffde00 34%, #e8ff99 83%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'normal':
          return ['radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'poison':
          return ['linear-gradient(20deg, #191919 0%, #100b32 33%, #5c0249 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'electric':
          return ['linear-gradient(90deg, #ffde00 34%, #e8ff99 83%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'ground':
          return ['linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'fairy':
          return ['linear-gradient(45deg, #ffe6f0 0%, #ffc5e0 34%, #ffa6b9 71%, #ff8a95 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'fighting':
          return ['#CF5151', '#E6B2B2', '#FFD6D6'];
         
        case 'psychic':
          return ['#F48BA6', '#F6C3D0', '#FEEFF3'];
         
        case 'rock':
          return ['linear-gradient(110deg, #FDBB2D 0%, #3A1C71 100%)','rgba(0, 0, 0, 0.7)','rgba(255, 255, 255, 0.65)'];
         
        case 'ghost':
          return ['#B98AB4', '#D3C4D1', '#E8DAE9'];
         
        case 'ice':
          return ['#8EDCE6', '#C1EAF6', '#D2F8FF'];
         
        case 'dragon':
          return ['#6C54B7', '#BCC2E6', '#E6E8FF'];
         
        case 'dark':
          return ['#383838', '#A6A6A6', '#D6D6D6'];
         
        case 'steel':
          return ['#A8A8A8', '#D1D1D1', '#E8E8E8'];
         
        case 'flying':
          return ['#5FBEE6', '#B4DFF5', '#C8E9FF'];
         
        default:
          return ['#000000', '#2B2A2A', '#585252'];
      }
};
