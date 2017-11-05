<?php

/**
 *
 */
 // $dsn = 'mysql:host='.Config::read('db.host').';dbname='.Config::read('db.basename').';port='.Config::read('db.port').';connect_timeout=15';
 // $username = Config::read('db.username');
 // $password = Config::read('db.password');
 $dsn = 'mysql:dbname=gvc353_2;host=172.31.40.112;port=3306';
 $username = 'gvc353_2';
 $password = 'tujiem21';

 echo $username;
 echo $password;
 $dbHandler = new PDO($dsn, $username, $password);

 $query = 'SHOW TABLES';
 $result = $dbHandler -> prepare($query);
 $result -> execute();
 $information = $result->fetchAll();

 foreach($information as $item) {
   echo $item;
 }



// class dbConnection
// {
//
//     public $dbHandler;
//     private static $instance;
//
//     private function _constructor(){
//         $dsn = 'mysql:host='.Config::read('db.host').';dbname='.Config::read('db.basename').';port='.Config::read('db.port').';connect_timeout=15';
//         $username = Config::read('db.username');
//         $password = Config::read('db.password');
//         $this->dbHandler = new PDO($dsn, $username, $password);
//         print_r($username, $password);
//     }
//
//     public static function getInstance(){
//         if(isset(self::$instance)) {
//             $obj = __CLASS__;
//             self::$instance = new $obj;
//         }
//         return self::$instance;
//     }
// }
