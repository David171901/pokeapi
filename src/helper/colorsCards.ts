export const colorsByType = (type: string) => {
    switch (type) {
        case 'grass':
          return ['#5DA423', '#9BC88E', '#C5E28C'];
         
        case 'fire':
          return ['#E74C3C', '#F9A09E', '#F6D365'];
         
        case 'water':
          return ['#0074D9', '#7FB2F0', '#AED6F1'];
         
        case 'bug':
          return ['#70C1B3', '#A9C9A8', '#C9D5B9'];
         
        case 'normal':
          return ['#E6D4B9', '#D7C0A6', '#B7A89E'];
         
        case 'poison':
          return ['#4C2E4D', '#8D4B8D', '#BE96C3'];
         
        case 'electric':
          return ['#F5D56E', '#F9F871', '#FFF1C1'];
         
        case 'ground':
          return ['#5D3D1E', '#AE8F6F', '#D7BEA8'];
         
        case 'fairy':
          return ['#ED9AE4', '#F8C9E4', '#FBEAFF'];
         
        case 'fighting':
          return ['#CF5151', '#E6B2B2', '#FFD6D6'];
         
        case 'psychic':
          return ['#F48BA6', '#F6C3D0', '#FEEFF3'];
         
        case 'rock':
          return ['#5D534A', '#B8A49D', '#E8DED2'];
         
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
