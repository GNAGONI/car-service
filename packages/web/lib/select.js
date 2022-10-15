export const sortOptions = options =>
  options.sort((child1, child2) => {
    let sortIndex = 0;

    if (child1.label && child2.label) {
      const { label: label1 } = child1;
      const { label: label2 } = child2;

      if (label1 < label2) {
        sortIndex = -1;
      }

      if (label1 > label2) {
        sortIndex = 1;
      }
    }

    return sortIndex;
  });
