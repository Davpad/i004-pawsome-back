import { Request, Response } from 'express';
import { getAnimalService, getAnimalsService, updateAnimalService } from '../services/animalService';

export const getAnimals = async (req: Request, res: Response): Promise<Response> => {
    try {
        const animals = await getAnimalsService();
        return res.status(200).json(animals);

    } catch (error) {
        if ((error as Error).message === 'No se encontraron animales registrados') {
            return res.status(404).json({ message: (error as Error).message });
        }
        return res.status(500).json({ message: 'Error al obtener animales', error: (error as Error).message });
    }
};

export const getAnimal = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        const animal = await getAnimalService(id);

        return res.status(200).json(animal);

    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === 'No se encontró el animal') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Error al obtener el animal', error: error.message });
        }
        return res.status(500).json({ message: 'Error desconocido', error });
    }
};


export const updateAnimal = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedAnimal = await updateAnimalService(id, updateData);

        return res.status(200).json(updatedAnimal);

    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === 'Animal no encontrado') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Error al actualizar el animal', error: error.message });
        }

        return res.status(500).json({ message: 'Error desconocido', error });
    }
};
