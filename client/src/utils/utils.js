
export const parsedRealities = (stringToBeParsed) => {
    const cleanedString = stringToBeParsed
      .replace(/(\w+)\s*:/g, '"$1":')
      .replace(/'/g, '"')
      .replace(/(\w+)\"(\w+)/g, '$1\'$2')
      .replace(/,\s*\]/g, ']'); 
  
    console.log("Cleaned string:", cleanedString);
  
    let parsedObject;
    try {
      parsedObject = JSON.parse(cleanedString);
    } catch (error) {
      console.error("Error parsing the cleaned string:", error);
      console.error("Cleaned string with error:", cleanedString);
      return [];
    }
  
    const realities = parsedObject.Realities;
  
    return realities;
  };