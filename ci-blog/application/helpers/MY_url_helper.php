<?php

function loadCSS($name) {
	switch (ENVIRONMENT) {
		case 'development':
			$url = 'http://localhost:4000/dist/' . $name . '.css';
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
			$url = 'http://localhost:4000/dist/' . $name . '.js';
			break;
		case 'testing':
		case 'production':
			$url = 'http://cdn.com' . $name . '.css';
	}
	return '<script src="'. $url . '"></script>';
}
