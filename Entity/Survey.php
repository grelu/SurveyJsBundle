<?php

namespace Grelu\SurveyJsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 */

abstract class Survey
{

    /** @ORM\Id @ORM\GeneratedValue @ORM\Column(type="integer", name="id") */
    protected $id;

    /** @ORM\Column(name="title", nullable=true, unique=false, length=255) */
    protected $title;

    /** @ORM\Column(name="json", nullable=true, type="text") */
    protected $json;

    /** @ORM\OneToMany(targetEntity="DataSurvey", mappedBy="survey")*/   
    protected $data;

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
     * Set title
     *
     * @param string $title
     *
     * @return Survey
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set json
     *
     * @param string $json
     *
     * @return Survey
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

    public function addDatumSurvey(DataSurvey $datasurvey)
    {
        $this->data[] = $datasurvey;

        return $this;
    }

    public function removeDatumSurvey(DataSurvey $datasurvey)
    {
        $this->data->removeElement($datasurvey);
    }

    public function getData()
    {
        return $this->data;
    }
}