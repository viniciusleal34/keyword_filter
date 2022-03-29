import * as Yup from 'yup';
import ProjectString from '../constants/project-constants';

export const objectButton = (type) => {
    if (type === ProjectString.TYPE_TEXT) {
        return {
            schema: {
                title: Yup.string().required('O título é obrigatório'),
                value: Yup.string().required('O valor é obrigatória')
            },
            initialData: {
                title: '',
                value: ''
            }
        };
    }
    if (type === ProjectString.TYPE_LINK) {
        return {
            schema: {
                title: Yup.string().required('O título é obrigatório'),
                uri: Yup.string()
                    .required('O valor é obrigatória')
                    .url('É obrigatório que insira um link')
            },
            initialData: {
                title: '',
                uri: ''
            }
        };
    }
    if (type === ProjectString.TYPE_REDIRECT) {
        return {
            schema: {
                title: Yup.string().required('O título é obrigatório'),
                destinationService: Yup.string().required(
                    'O serviço é obrigatório'
                ),
                destinationState: Yup.string().required(
                    'O bloco de redirecionamento é obrigatório'
                )
            },
            initialData: {
                title: '',
                destinationService: '',
                destinationState: ''
            }
        };
    }
    if (type === ProjectString.TYPE_JSON) {
        return {
            schema:{
                title: Yup.string().required('O título é obrigatório'),
                value: Yup.string().required(
                    'O JSON é obrigatório'
                )
            },
            initialData: {
                title: '',
                value: ''
            }
        };
    }
};
