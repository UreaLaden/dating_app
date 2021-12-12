
export const Capitalize = (stringToCapitalize:string) => {
    let firstLetter:string = stringToCapitalize.charAt(0).toUpperCase();
    let remainingChars:string = stringToCapitalize.slice(1);
      return firstLetter + remainingChars;
}

