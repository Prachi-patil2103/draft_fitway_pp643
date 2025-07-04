document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.products-dropdown-toggle');
    const dropdownContainer = document.querySelector('.products-dropdown-container');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (dropdownToggle && dropdownContainer) {
        dropdownToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContainer.classList.toggle('active');

            if (dropdownContainer.classList.contains('active')) {
                document.addEventListener('click', function closeDropdownOnOutsideClick(e) {
                    if (!dropdownContainer.contains(e.target)) {
                        dropdownContainer.classList.remove('active');
                        dropdownItems.forEach(item => item.classList.remove('active'));
                        document.removeEventListener('click', closeDropdownOnOutsideClick);
                    }
                });
            } else {
                dropdownItems.forEach(item => item.classList.remove('active'));
            }
        });
    }

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.add('active');

            if (dropdownContainer) {
                dropdownContainer.classList.remove('active');
            }

            const itemText = this.querySelector('.dropdown-item-text').innerText;
            let targetPage = '';

            switch (itemText.toLowerCase()) {
                case 'crm':
                    targetPage = 'file:///C:/Users/samme/OneDrive/Desktop/Fitway_CRM_shradha/crm_index.html'; 
                    break;
                case 'coach app':
                    targetPage = 'https://www.yourwebsite.com/products/coach-app'; // Use full URL here
                    break;
                case 'branded member app':
                    targetPage = 'file:///C:/Users/samme/OneDrive/Desktop/Fitway_branded_member_shradha/index.html'; 
                    break;
                case 'group hr training':
                    targetPage = 'file:///C:/Users/samme/OneDrive/Desktop/Fitway_group_HR_shradha/index.html'; 
                    break;
                case 'f-rounds':
                    targetPage = 'file:///C:/Users/samme/OneDrive/Desktop/Fitway_F-ROUNDS_shradha/index.html'; 
                    break;
                default:
                    console.warn('No target page defined for:', itemText);
                    return;
            }

            if (targetPage) {
                window.location.href = targetPage;
            }

            console.log("Clicked:", itemText);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const brandedMemberSections = document.querySelectorAll(
        '.book-demo-section'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    brandedMemberSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const brandedMemberSections = document.querySelectorAll(
        '.hero-section, ' +
        '.second-section, ' +
        '.fourth-section, ' +
        '.sixth-section, ' +
        '.eighth-section, ' +
      

        // NEW Branded Member Sections (Content Left, Image Right)
        '.third-section, ' +
        '.fifth-section, ' +
        '.seventh-section, ' +
        '.ninth-section' 
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    brandedMemberSections.forEach(section => {
        sectionObserver.observe(section);
    });
});






  function animateOnScroll(selector) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // run only once
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }

  // Call function on Hero Section
  animateOnScroll('.hero-section');

