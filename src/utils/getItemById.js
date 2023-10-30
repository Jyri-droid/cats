const getItemById = (items, id) => {
    return items.find((element) => element.id === id);
  };
  
export default getItemById;
  