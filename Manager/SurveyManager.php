<?php

namespace Grelu\SurveyJsBundle\Manager;

class SurveyManager
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
    public function createSurvey()
    {
        $class = $this->getClass();
        $survey = new $class();

        return $survey;
    }

    /**
     * {@inheritdoc}
     */
    public function getClass()
    {
        return $this->class;
    }
}
