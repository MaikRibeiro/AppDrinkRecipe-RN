export type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: null;
    strTags: string;
    strVideo: null;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    [key: `strIngredient${number}`]: string | null;
    [key: `strMeasure${number}`]: string | null;
    'strInstructionsZH-HANS': null;
    'strInstructionsZH-HANT': null;
    strDrinkThumb: string;
    strImageSource: null;
    strImageAttribution: null;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
  };