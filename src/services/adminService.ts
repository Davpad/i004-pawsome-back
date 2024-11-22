import Usuario from '../models/userModel';
import VolunteersModel from '../models/volunteersModel';
import ActivityLog from '../models/adminModel';
import AnimalModel from '../models/animalModel';
import AdoptionModel from '../models/adoptionRequests';
import { error } from 'console';
// import DonationModel from '../models/donationModel'; // Comentado hasta que se cree el modelo de donaciones

export const getDashboardData = async (refugeId: string) => {
  try {
    const [totalUsers, totalOpportunities, totalActivities] = await Promise.all([
      Usuario.countDocuments(),
      VolunteersModel.countDocuments({ refugeId }),
      ActivityLog.countDocuments({ refugeId }),
    ]);

    const recentActivities = await ActivityLog.find({ refugeId })
      .sort({ createdAt: -1 })
      .limit(5);

    const totalAnimals = await AnimalModel.countDocuments({ refugeId });

    const totalAdoptions = await AdoptionModel.countDocuments({ refugeId });

    // const totalDonations = await DonationModel.countDocuments({ refugeId }); // Comentado hasta que se cree el modelo de donaciones


    return {
      totalUsers,
      totalOpportunities,
      totalActivities,
      recentActivities,
      totalAnimals,
      totalAdoptions,
      // totalDonations, // Comentado hasta que se cree el modelo de donaciones
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error
      ? `Error al obtener los datos del dashboard: ${error.message}`
      : 'Error desconocido al obtener los datos del dashboard';

    throw new Error(errorMessage);
  }
};
export const CreateAdmin = async (userID: string) => {
  const user = await Usuario.findById({ where: { id: userID } })

  if (!user) {
    throw new Error('no se encontro el usuario');
  }
  if (user.role === 'user') {
    user.role = 'admin'
    await user.save();
  } else {
    throw new Error('El usuario ya tiene un rol diferente a "user"');
  }

}

