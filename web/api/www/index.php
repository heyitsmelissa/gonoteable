<?php
require_once(dirname(__FILE__).'/../../common/libs/yii/yii.php');

$config=dirname(__FILE__).'/../config/main.php';

defined('YII_DEBUG') or define('YII_DEBUG',true);
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

Yii::createWebApplication($config)->run();