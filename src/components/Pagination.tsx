import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const generatePages = (
  currentPage: number,
  totalPages: number
): (number | "dots")[] => {
  const pages: (number | "dots")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "dots", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "dots",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "dots",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "dots",
        totalPages
      );
    }
  }

  return pages;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = generatePages(currentPage, totalPages);

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {/* Desktop pagination (with page numbers) */}
      <div className="hidden md:flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          Prev
        </button>

        {pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page === "dots" ? (
              <span className="px-2 py-1">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded border ${
                  currentPage === page ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Mobile simplified pagination */}
      <div className="flex md:hidden items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          «
        </button>

        <span className="text-sm">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          »
        </button>
      </div>
    </div>
  );
};
