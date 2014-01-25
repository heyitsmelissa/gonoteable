<?php

return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'preload'=>array('log'),
	'import'=>array(
		'application.components.*',
	),
	'components'=>array(
		'firebase'=>array(
			'class'=>'ext.firebase.FireBase'
		),
		'user'=>array(
			'allowAutoLogin'=>true,
		),
		'urlManager'=>array(
			'showScriptName'=>false,
			'urlFormat'=>'path',
			'rules'=>array(
				// API
				array('<controller>/create', 'pattern'=>'<controller:\w+>', 'verb'=>'POST'),

				'<action:\w+>/<id:[\w\-]+>' => 'site/<action>',
				'<action:\w+>' => 'site/<action>',
			),
		),
		'errorHandler'=>array(
			'errorAction'=>'site/error',
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
			),
		),
	)
);