<?php

namespace Grelu\SurveyJsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * DataSurvey
 *
 * @ORM\Table(name="data_survey")
 * @ORM\Entity(repositoryClass="Grelu\SurveyJsBundle\Repository\DataSurveyRepository")
 */
class DataSurvey
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="json", type="text")
     */
    private $json;

    /**
     * @ORM\ManyToOne(targetEntity="Grelu\SurveyJsBundle\Entity\Survey")
     * @ORM\JoinColumn(nullable=false)
     */
    private $survey;

    /**
     * @var string
     *
     * @ORM\Column(name="number", type="string", length=255)
     */
    private $number;

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
