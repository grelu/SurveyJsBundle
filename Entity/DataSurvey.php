<?php

namespace Grelu\SurveyJsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 */

class DataSurvey
{
    /**
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(name="json", type="text")
     */
    protected $json;

    /**
     * @ORM\ManyToOne(targetEntity="Survey")
     * @ORM\JoinColumn(name="survey_id", referencedColumnName="id")
     */
    protected $survey;

    /**
     * @ORM\Column(name="number", type="string", length=255)
     */
    protected $number;

    public function __construct($number){
        $this->number=$number;
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set survey
     *
     * @param \Grelu\SurveyJsBundle\Survey $survey
     *
     * @return DataSurvey
     */
    public function setSurvey(\Grelu\SurveyJsBundle\Entity\Survey $survey)
    {
        $this->survey = $survey;

        return $this;
    }

    /**
     * Get survey
     *
     * @return \Grelu\SurveyJsBundle\Entity\Survey
     */
    public function getSurvey()
    {
        return $this->survey;
    }

    /**
     * Set number
     *
     * @param string $number
     *
     * @return DataSurvey
     */
    public function setNumber($number)
    {
        $this->number = $number;

        return $this;
    }

    /**
     * Get number
     *
     * @return string
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * Set json
     *
     * @param string $json
     *
     * @return DataSurvey
     */
    public function setJson($json)
    {
        $this->json = $json;

        return $this;
    }

    /**
     * Get json
     *
     * @return string
     */
    public function getJson()
    {
        return $this->json;
    }
}
