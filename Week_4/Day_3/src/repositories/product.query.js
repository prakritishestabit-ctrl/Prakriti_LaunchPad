exports.buildProductQuery = (query) => {
  const {
    search,
    minPrice,
    maxPrice,
    tags,
    sort,
    page = 1,
    limit = 10,
    includeDeleted,
  } = query;

  const filter = {};
  const andConditions = [];

  if (!includeDeleted) {
    andConditions.push({
      $or: [
        { isDeleted: false },
        { isDeleted: { $exists: false } },
      ],
    });
  }

  if (search) {
    andConditions.push({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });
  }

  if (minPrice || maxPrice) {
    const price = {};
    if (minPrice) price.$gte = Number(minPrice);
    if (maxPrice) price.$lte = Number(maxPrice);
    andConditions.push({ price });
  }
  if (tags) {
    andConditions.push({ tags: { $in: tags.split(",") } });
  }

  if (andConditions.length) {
    filter.$and = andConditions;
  }

  const sortObj = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortObj[field] = order === "desc" ? -1 : 1;
  }

  const options = {
    sort: sortObj,
    skip: (page - 1) * limit,
    limit: Number(limit),
  };

  return { filter, options };
};
