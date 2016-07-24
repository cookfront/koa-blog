<?php

function loadCSS($name) {
	switch (ENVIRONMENT) {
		case 'development':
			$url = base_url() . 'public/dist/css/' . $name . '.css';
			break;
		case 'testing':
		case 'production':
			$url = 'http://cdn.com' . $name . '.css';
	}
	return '<link rel="stylesheet" type="text/css" href="' . $url . '" />';
}

function loadJS($name) {
	switch (ENVIRONMENT) {
		case 'development':
			$url = base_url() . 'public/dist/js/' . $name . '.js';
			break;
		case 'testing':
		case 'production':
			$url = 'http://cdn.com' . $name . '.css';
	}
	return '<script src="'. $url . '"></script>';
}
