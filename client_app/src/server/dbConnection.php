<?php

/**
 *
 */
class dbConnection
{

    public $dbHandler;
    private static $instance;

    private function _constructor(){
        $dsn = 'mysql:host='.Config::read('db.host').';dbname='.Config::read('db.basename').';port='.Config::read('db.port').';connect_timeout=15';
        $username = Config::read('db.username');
        $password = Config::read('db.password');
        $this->dbHandler = new PDO($dsn, $username, $password);
    }

    public static function getInstance(){
        if(isset(self::$instance)) {
            $obj = __CLASS__;
            self::$instance = new $obj;
        }
        return self::$instance;
    }
}