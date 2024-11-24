import apiClient from './apiClient';

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
    (config) => {
        const authKey = process.env.NEXT_PUBLIC_API_KEY; // 환경변수에서 가져오기
        config.params = { ...config.params, authKey }; // 공통 파라미터 추가
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;
