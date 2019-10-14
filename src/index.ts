import { AppController } from "~/controllers/app-controller";
import { Redmine } from "./gateways/redmine";
import { Issue } from "./models/issue";
import { Project } from "./models/Project";
import { IssuePage } from "./views/pages/issue-page";
import { FavMenu } from "./views/components/fav-menu";
import { FavButton } from "./views/components/fav-menu";

import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

AppController.dispatch(window.location.href);

export { Redmine, Issue, Project, IssuePage };
