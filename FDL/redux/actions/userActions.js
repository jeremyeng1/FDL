import React, { useState, useEffect, useContext, useMemo } from 'react';
import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ
} from '../types';
import axios from 'axios';
import { store } from '../store.js';



