var pageHeader = document.querySelector('.page-header');
		var toggleNav = document.querySelector('.page-header__toggle-nav');

		pageHeader.classList.remove('page-header--no-js');

		toggleNav.addEventListener('click' , function() {
			if (pageHeader.classList.contains('page-header--closed-nav')) {
				pageHeader.classList.remove('page-header--closed-nav');
				pageHeader.classList.add('page-header--open-nav');
			}
			else {
				pageHeader.classList.add('page-header--closed-nav');
				pageHeader.classList.remove('page-header--open-nav');
			}
		});
