/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

/*global Drupal:false */

(function ($, Drupal, window, document, undefined) {
  'use strict';

  $(document).ready(function () {

      // Application menu.
      // ======================================================================

      var app_menu_id = '#block-pgh-application-application-category-menu';

      // Check is app menu block exist.
      if ($(app_menu_id).length) {

        // Don't show the drop-down if only one item exist.
        if ($(app_menu_id + ' > .item-list > ul').hasClass('single-item')) {

          // Used to style the single item elements
          $(app_menu_id).addClass('single-item');

          // Remove the anchor function
          $('a.category-link').click(function(e) {
            e.preventDefault();
          });
        }

        // Wrap application drop-down in active section UL parent for theming.
        else if ($(app_menu_id + ' ul.category-menu li a').hasClass('active')) {
          var activeTitle = $(app_menu_id + ' ul.category-menu li a.active').text();

          $('<ul class="selected-item"><li class="cat-menu-closed"><span>' + activeTitle + '</span></li></ul>').prependTo(app_menu_id + ' .item-list');

          $(app_menu_id + ' ul.category-menu').appendTo(app_menu_id + ' .item-list ul.selected-item li');

          // Add back and next arrows.
          var $app_menu_arrows = $('#block-pgh-application-application-category-menu ul.category-menu li a.active').parent('li');
          if ($app_menu_arrows.prev('li')) {
            $app_menu_arrows.prev().children('a').clone().prependTo(app_menu_id + ' .item-list').wrap('<span class="prev" />');
          }
          if ($app_menu_arrows.next('li')) {
            $app_menu_arrows.next().children('a').clone().prependTo(app_menu_id + ' .item-list').wrap('<span class="next" />');
          }


          // Add the active category class to h1 by first grabbing the classes needed.
          var active_classes = $('#block-pgh-application-application-category-menu ul.category-menu li a.active').attr('class');

          // Second, apply classes to h1. Remove unnecessary class and put back the original classes.
          $('h1#page-title').attr('class', active_classes)
                            .removeClass('category-link active')
                            .addClass('page__title title')
                            .prepend('<span />'); // Add an empty SPAN to put the category icon into.

        } else {
          $(app_menu_id + ' ul.category-menu').wrap('<ul class="selected-item"><li class="cat-menu-closed" />').parent().prepend('<span>Select a category</span>');
          $(app_menu_id + ' ul.category-menu li.first a').clone()
                                                         .prependTo(app_menu_id + ' .item-list')
                                                         .wrap('<span class="next" />');
          $('h1#page-title').addClass('no-category');
        }

        // Add click event to drop-down menu.
        $('.selected-item li').click(function() {
          if ($(this).hasClass('cat-menu-closed')) {
            $(this).removeClass('cat-menu-closed').addClass('cat-menu-opened');
          } else {
            $(this).removeClass('cat-menu-opened').addClass('cat-menu-closed');
          }
        });

        // Close menu on outside click.
        $(document).click(function(e) {
          if (($('.selected-item li').hasClass('cat-menu-opened')) && ($(e.target).closest('.selected-item li').length === 0)) {
            $('.selected-item li').removeClass('cat-menu-opened');
            $('.selected-item li').addClass('cat-menu-closed');
          }
        });

      } // end if app_menu_id



      // Category icons
      // ======================================================================

      var cat_menu_id = '#block-pgh-application-application-category-menu--2';

      // Check is app menu block exist.
      if ($(cat_menu_id).length) {

        // Don't show the category bar if non exist.
        if ($(cat_menu_id + ' > .item-list > ul').hasClass('single-item')) {
          $('#cat-menu-wrap').hide();
          $('h1#page-title').addClass('no-category');

        } else {

          // Copy anchor text to a title attribute.
          $(cat_menu_id + ' ul.category-menu li a').each(function() {
            var titleAttrText = $(this).text();
            $(this).attr('title', titleAttrText);
          });
        }
      }


      // Add waypoints functionailty.
      // imakewebthings.com/jquery-waypoints
      // ======================================================================
      // App menu
      $('#application-menu-container').waypoint('sticky');

      // Review details
      $('#hospital-wrap').waypoint('sticky');


      // Show / hide business units on the dashboard.
      // ======================================================================

      // Add open height state to each block.
      $('.business-unit-block').each(function() {
        var $height_opened = $(this).height();
        $(this).css('height', $height_opened);
      });

      // Set clickable toggle arrow.
      $('.business-unit-block').addClass('bu-closed')
                               .prepend('<a href="#" class="toggle"><span>Toggle</span></a>');

      // Toggle show/hide class.
      $('.business-unit-block a.toggle').click(function() {
        if ($(this).parent().hasClass('bu-closed')) {
          $(this).parent().removeClass('bu-closed').addClass('bu-opened');
        } else {
          $(this).parent().removeClass('bu-opened').addClass('bu-closed');
        }
        return false;
      });


      // Convert the title tag of a glossify term anchor to a tool tip
      // ======================================================================
      $('.glossify-link').each(function() {
        var glossary_term = $(this).attr('title');

        $('<span class="glossify-tooltip"><em>' + glossary_term + '</em></span>').appendTo(this);
        $(this).removeAttr('title');

        var position_tip = $(this).position();
        $(this).children('.glossify-tooltip').css('left', '-' + position_tip.left + 'px');

        // Remove the anchor function
        $(this).click(function(e) {
          e.preventDefault();
        });

      });


      // Disable node save page and add a progress indicator in case of long load times.
      // ======================================================================
      $('.node-application-form').submit(function () {
        var $button = $(this).find('#edit-submit');
        $button.attr('disabled', 'disabled').addClass('working').val('Working...');
      });


      // Disable fieldsets on print.
      // https://support.mozilla.org/en-US/questions/936857
      // ======================================================================
      $('.page-application .print-page, .page-review .print-page').click(function() {
        window.print();
      });


      // Add class to reviewer page
      // ======================================================================
      $('#reviewer-wrap').parents('#main-wrap').addClass('main-reviewer');


      // Comments
      // ======================================================================
      var app_comment = '.page-application form .comment-form, .page-review form .comment-form';

      $(app_comment + ' .add-comment').addClass('closed-comment');
      $(app_comment + ' .add-comment').click(function() {
        if ($(this).hasClass('closed-comment')) {
          $(this).siblings('.comment-wrapper').show();
          $(this).text('Close comment').removeClass('closed-comment').addClass('opened-comment');
        } else {
          $(this).siblings('.comment-wrapper').hide();
          $(this).text('Add comment').removeClass('opened-comment').addClass('closed-comment');
        }
      });

      var app_comment_submit = '.page-application form .comment-form ul li.comment-add a, .page-review form .comment-form ul li.comment-add a';

      $(app_comment_submit).click(function() {
        $(this).text('Saving...').addClass('saving');
        setTimeout(function() {
          $(app_comment_submit).text('Save comment').removeClass('saving');
        }, 1000);
      });


  });

})(jQuery, Drupal, this, this.document);
