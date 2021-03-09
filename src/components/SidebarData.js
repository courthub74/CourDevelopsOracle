import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';


export const SidebarData = [
    {
        title: 'Python',
        path: '/python',
        icon: <FaIcons.FaPython />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Functions',
                path: '/python/functions',
            },
            {
                title: 'Self Parameter',
                path: '/python/self',
            },
            {
                title: 'For Loop',
                path: '/python/for',
            },
            {
                title: 'While Loop',
                path: '/python/while',
            },
            {
                title: 'Counter',
                path: '/python/counter',
            },
            {
                title: 'Classes',
                path: '/python/classes',
            },
            {
                title: 'Control-Flow',
                path: '/python/controlflow',
            },
            {
                title: 'Regional Expressions',
                path: '/python/regex',
            },
            {
                title: 'TryExcept',
                path: '/python/tryex',
            },
            {
                title: 'Web-Scraping',
                path: '/python/webscraping',
            },
            {
                title: 'Sending Email',
                path: '/python/autoemail',
            },
        ]
    },
    {
        title: 'JavaScript',
        path: '/javascript',
        icon: <DiIcons.DiJavascript1 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'JS Basics',
                path: '/javascript/basics',
            },
            {
                title: 'Functions',
                path: '/javascript/functions',
            },
            {
                title: 'Classes',
                path: '/javascript/classes',
            },
            {
                title: 'Scopes',
                path: '/javascript/scopes',
            },
            {
                title: 'Arrays',
                path: '/javascript/arrays',
            },
            {
                title: 'Disable Fields',
                path: '/javascript/dissablefields',
            },
            {
                title: 'Color Code Selection',
                path: '/javascript/colorcode',
            },
            {
                title: 'Make Elements Dissapear',
                path: '/javascript/dissapear',
            },
            {
                title: 'Show/Hide Colors',
                path: '/javascript/showhide',
            },
            {
                title: 'FizzBuzz',
                path: '/javascript/fizzbuzz',
            },
            {
                title: 'Allen Iverson',
                path: '/javascript/answer',
            },
        ]
    },
    {
        title: 'HTML',
        path: '/html',
        icon: <AiIcons.AiFillHtml5 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Forms',
                path: '/html/forms',
            },
            {
                title: 'Tables',
                path: '/html/tables',
            },
            {
                title: 'Submit Button',
                path: '/html/submit',
            },
            {
                title: 'Dropdown',
                path: '/html/drop',
            },
            {
                title: 'User Authentication',
                path: '/html/authenticate',
            },
            {
                title: 'Number Box',
                path: '/html/numbox',
            },
            {
                title: 'Radio Dial',
                path: '/html/radio',
            },
            {
                title: 'Slider',
                path: '/html/slider',
            },
            {
                title: 'Text Area',
                path: '/html/textarea',
            },
            {
                title: 'Daves Burger Menu',
                path: '/html/daves',
            },
        ]
    },
    {
        title: 'CSS',
        path: '/css',
        icon: <DiIcons.DiCss3 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'CSS Notes',
                path: '/css/notes',
            },
        ]
    },
    {
        title: 'Django',
        path: '/django',
        icon: <SiIcons.SiDjango />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Setting Up',
                path: '/django/settingup',
            },
            {
                title: 'MVC Basics',
                path: '/django/mvc',
            },
            {
                title: 'Clone Django Repo',
                path: '/django/clonerepo',
            },
            {
                title: 'Models (Django Database)',
                path: '/django/models',
            },
            {
                title: 'Django ORM',
                path: '/django/orm',
            },
            {
                title: 'Heroku Deploy',
                path: '/django/heroku',
            },
            {
                title: 'AWS Deploy',
                path: '/django/aws',
            },
            {
                title: 'Azure Deploy',
                path: '/django/azure',
            },
            {
                title: 'Digital Ocean Deploy',
                path: '/django/digitalocean',
            },
            
        ]
    },
    {
        title: 'Flask',
        path: '/flask',
        icon: <SiIcons.SiFlask/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Basic Structure',
                path: '/flask/basicflask',
            },
            {
                title: 'Heroku Deploy',
                path: '/flask/heroku',
            },
        ]
    },
    {
        title: 'React',
        path: '/react',
        icon: <FaIcons.FaReact/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Constructor',
                path: '/react/constructor',
            },
            {
                title: 'Change Class by Click',
                path: '/react/classchange',
            },
        ]
    },
    {
        title: 'Git',
        path: '/git',
        icon: <DiIcons.DiGit/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'General Git',
                path: '/git/general',
            },
            {
                title: '.gitignore',
                path: '/git/gitignore',
            },
            {
                title: 'Delete Git Repo',
                path: '/git/deletegit',
            },
            {
                title: 'Push To Heroku',
                path: '/git/heroku',
            },
        ]
    },
    {
        title: 'GitHub',
        path: '/github',
        icon: <AiIcons.AiFillGithub/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Initial Push To GitHub',
                path: '/github/push',
            },
            {
                title: 'GitHub Actions',
                path: '/github/actions',
            },
        ]
    },
    {
        title: 'API',
        path: '/api',
        icon: <AiIcons.AiFillApi/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'RESTful',
                path: '/api/rest',
            },
            {
                title: 'Soap',
                path: '/api/soap',
            },
        ]
    },
]