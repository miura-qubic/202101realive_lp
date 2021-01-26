
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {
	// JQueryの範囲

	// フェードイン
	$('.fadein, .side_fadein, .fade_txt').on('inview',function(){
		$(this).addClass('active');
	});

	// Q&A 開閉
	$('.top07 dt').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('open');
	});

	// 一番最後に記述
	$("body").removeClass("preload");


});