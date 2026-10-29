import supabase from '../config/database.js';

export const findBoardsByUserId = async (userId) => {
    const {data, error} = await supabase
        .from('Board')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error(`Erro ao buscar boards do usuário ${userId}:`, error.message);
        throw error;
    }

    return data;
};