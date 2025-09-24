import express from 'express'
import { Router } from 'express'
import {handleGenerateUrl , handleRedirectUrl , handleAnalytics , handleHome} from '../controllers/url.controller.js'

const urlRoutes = Router();
urlRoutes.route('/').get(handleHome)
urlRoutes.route('/generate').post(handleGenerateUrl)
urlRoutes.route('/:id').get(handleRedirectUrl)
urlRoutes.route('/analytics/:id').get(handleAnalytics)

export default urlRoutes