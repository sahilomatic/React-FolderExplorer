let data = {
  name: "root",
  id: 0,
  isFolder: true,
  child: [
    { name: "first", id: 1, isFolder: true, child: [] },
    {
      name: "second",
      id: 2,
      isFolder: true,
      child: [
        {
          name: "second_child",
          isFolder: true,
          child: [
            { name: "second_file", id: 4, isFolder: false },
            { name: "second_folder", id: 5, isFolder: true, child: [] }
          ]
        }
      ]
    },

    { name: "third", id: 3, isFolder: false }
  ]
};

export default data;
