# Product Query Engine Documentation

The query engine is responsible for converting API query parameters into MongoDB filters and options.
It ensures the following:

- Dynamic search using regex on `name` and `description`.
- Filtering by price range using `minPrice` and `maxPrice`.
- Filtering by tags (comma-separated list).
- Sorting by any field in ascending or descending order.
- Pagination using `page` and `limit`.
- Controlled soft-deletion behavior using `includeDeleted` parameter.
