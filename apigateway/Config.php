<?php

/**
 *
 */
class Config
{
    static $confArray;

    public static function read($name){
        return self::$confArray[$name];
    }

    public static function write($name, $value){
        self::$confArray[$name] = $value;
    }
}

Config::write('db.host', 'gvc353_2.encs.concordia.ca');
Config::write('db.port', '3306');
Config::write('db.basename', 'gvc353_2');
Config::write('db.user', 'gvc353_2');
Config::write('db.password', 'tujiem21');