import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length /
      this._data.resultsPerPage);
    // Page 1 and other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateNextPageButton(currentPage);
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generatePrevPageButton(currentPage);
    }

    // Other page
    if(currentPage < numPages) {
      return this._generatePrevPageButton(currentPage) +
        this._generateNextPageButton(currentPage);
    }

    // Page 1 and no other pages
    return '';
  }

  _generatePrevPageButton(currentPage) {
    return `
       <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          `;
  }

  _generateNextPageButton(currentPage) {
    return `
       <button data-goto="${currentPage + 1}" 
       class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          `;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function(e) {
      //looks for parens of clickable block (like span, icon...)
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
