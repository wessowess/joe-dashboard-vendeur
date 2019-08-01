<?php
session_start();

$uri = $_SERVER["REQUEST_URI"];

$endUri = strtolower(substr(strrchr($uri, "/"), 1));

switch ($endUri) 
{
	case 'accueil':
	default:
		require_once("accueil.html");
		break;

	case 'missions':
		require_once("missions.html");
		break;

	case 'planning':
		require_once("planning.html");
		break;

	case 'documents':
		require_once("documents.html");
		break;

	case 'gains':
		require_once("gains.html");
		break;

	case 'compte':
		require_once("compte.html");
		break;

	case 'contact':
		require_once("contact.html");
		break;
}

