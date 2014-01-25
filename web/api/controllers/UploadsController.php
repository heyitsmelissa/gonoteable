<?php

class UploadsController extends ApiController
{
	public function doCreate()
	{
		if ( $_FILES ) {

			move_uploaded_file($_FILES['photo']['tmp_name'], '../files/'.$_FILES['photo']['name']);
			// $new_file_name = md5($_FILES['photo']['tmp_name'].microtime());
		}

		// $url = 'https://noteable.firebaseio.com/note.json';
		// $data = array(
		// 	'text'=>'1234',
		// 	'title'=>'asdfadsfad'
		// );
		// $jsonData = json_encode($data);

		// $ch = curl_init();
		// curl_setopt($ch, CURLOPT_URL, $url );   
		// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true );
		// curl_setopt($ch, CURLOPT_POST, true ); 
		// curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData ); 

		// $result = curl_exec($ch);

		// curl_close($ch);
	}
}