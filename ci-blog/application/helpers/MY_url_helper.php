<?php

function loadCSS($name) {
	// TODO: remove `loadCSS` and `loadJS` duplication code
	$assets_json = file_get_contents(FCPATH . 'assets.json');
	if ($assets_json) {
		$assets_json = json_decode($assets_json);
	}
	switch (ENVIRONMENT) {
		case 'development':
			$url = 'http://localhost:4000/dist/' . $name . '.css';
			break;
		case 'testing':
		case 'production':
			$url = $assets_json->$name->css;
	}
	return '<link rel="stylesheet" type="text/css" href="' . $url . '" />';
}

function loadJS($name) {
	$assets_json = file_get_contents(FCPATH . 'assets.json');
	if ($assets_json) {
		$assets_json = json_decode($assets_json);
	}
	switch (ENVIRONMENT) {
		case 'development':
			$url = 'http://localhost:4000/dist/' . $name . '.js';
			break;
		case 'testing':
		case 'production':
			$url = $assets_json->$name->js;
	}
	return '<script src="'. $url . '"></script>';
}
