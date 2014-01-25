<?php

class ApiController extends CController
{
	public function actionError()
	{
		if($error=Yii::app()->errorHandler->error)
		{
			if(Yii::app()->request->isAjaxRequest)
				echo $error['message'];
			else
				$this->render('error', $error);
		}
	}

	public function actionCreate()
	{
		$this->doCreate();
	}

	public function doCreate()
	{

	}
}