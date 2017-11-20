<?php

namespace Grelu\SurveyJsBundle\Manager;

class DataSurveyManager
{

    /**
     * @var string
     */
    private $class;

    /**
     * Constructor.
     * @param string                   $class
     */
    public function __construct($class)
    {
        $this->class = $class;
    }


    /**
     * {@inheritdoc}
     */
    public function createDataSurvey($number)
    {
        $class = $this->getClass();
        $dataSurvey = new $class($number);

        return $dataSurvey;
    }

    /**
     * {@inheritdoc}
     */
    public function getClass()
    {
        return $this->class;
    }
}
