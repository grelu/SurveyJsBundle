<?php

namespace Grelu\SurveyJsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Survey controller.
 *
 * @Route("survey")
 */
class SurveyController extends Controller
{
    /**
     * Lists all survey entities.
     *
     * @Route("/", name="survey_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $surveyManager = $this->get('survey.manager');
        $surveys = $em->getRepository($surveyManager->getClass())->findAll();
        return $this->render('SurveyJsBundle:survey:index.html.twig', array(
            'surveys' => $surveys,
        ));
    }

    /**
     * Creates a new survey entity.
     *
     * @Route("/edit/{id}", name="survey_new_edit")
     * @Method({"GET", "POST"})
     */
    public function newEditAction($id = NULL)
    {
        $em = $this->getDoctrine()->getManager();
        if(is_null($id)){
            $id = 0;
            $json = NULL;
        }else{
            $surveyManager = $this->get('survey.manager');
            $survey = $em->getRepository($surveyManager->getClass())->find($id);
            $id = $survey->getId();
            $json = $survey->getJson();
        }
        return $this->render('SurveyJsBundle:survey:new_edit.html.twig', array(
            'id' => $id,
            'json' => $json
        ));
    }

    /**
     * Save a survey entity.
     *
     * @Route("/save", name="survey_save", options={"expose"=true})
     * @Method("POST")
     */
    public function saveAction(Request $request)
    {             
        $em=$this->getDoctrine()->getManager();
        $surveyManager = $this->get('survey.manager');
        if($request->get('id') === '0'){           
            $survey = $surveyManager->createSurvey();
        }else{
            $survey = $em->getRepository($surveyManager->getClass())->find($request->get('id'));      
        }
        $surveyAsObject = json_decode($request->get('jsonSurvey'));
        if(property_exists($surveyAsObject, 'title')){
            $survey->setTitle($surveyAsObject->title);
        }else{
            $survey->setTitle(time());
        }
        $survey->setJson(preg_replace("#\n|\t|\r#","",$request->get('jsonSurvey')));
        $em->persist($survey);
        $em->flush();
        return new Response(json_encode(array('id' => $survey->getId())));
    }
    /**
     * Creates a new survey entity.
     *
     * @Route("/show/{id}/number/{number}", name="survey_show")
     * @Method("GET")
     */
    public function showAction($id, $number = null)
    {
        $em=$this->getDoctrine()->getManager();
        $surveyManager = $this->get('survey.manager');
        $dataSurveyManager = $this->get('datasurvey.manager');
        $survey = $em->getRepository($surveyManager->getClass())->find($id);
        $dataSurvey = $em->getRepository($dataSurveyManager->getClass())->findOneByNumber($number);
        return $this->render('SurveyJsBundle:survey:show.html.twig', array(
            'survey' => $survey,
            'dataSurvey' => $dataSurvey
        ));
    }
    /**
     * Save a survey entity.
     *
     * @Route("/data-save", name="survey_data_save", options={"expose"=true})
     * @Method("POST")
     */
    public function dataSaveAction(Request $request)
    {             
        $em=$this->getDoctrine()->getManager();
        $surveyAsObject = json_decode($request->get('dataJsonSurvey'));
        $surveyManager = $this->get('survey.manager');
        $dataSurveyManager = $this->get('datasurvey.manager');
        $survey = $em->getRepository($surveyManager->getClass())->find($request->get('idSurvey'));
        $dataSurvey = $em->getRepository($dataSurveyManager->getClass())->findOneByNumber($request->get('number'));
        if(is_null($dataSurvey)){
            $class = $this->container->getParameter('data_survey_class');
            $dataSurvey = $dataSurveyManager->createDataSurvey((time().rand(0,99999999).time()));
        }
        $dataSurvey->setSurvey($survey);
        $dataSurvey->setJson($request->get('dataJsonSurvey'));
        $em->persist($dataSurvey);
        $em->flush();
        return new Response(json_encode(array('id' => $dataSurvey->getId())));
    }
}
