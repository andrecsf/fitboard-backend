import { findBoardsByUserId } from '../repositories/boardRepository.js';

export const getUserBoards = async (userId) => {
    if (userId === undefined || userId === null || String(userId).trim() === '') {
        throw new Error('O ID do usuário é obrigatório.');
    }

    const idStr = String(userId).trim();

    if (!/^\d+$/.test(idStr)) {
        throw new Error('O ID do usuário deve ser um número inteiro válido.');
    }

    if (Number(idStr) === 0) {
        throw new Error('O ID do usuário deve ser maior que zero.');
    }

    try {
        const boards = await findBoardsByUserId(Number(idStr));
        return boards;
    } catch (error) {
        throw new Error(`Falha ao listar os boards: ${error.message}`);
    }
};
