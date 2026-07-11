'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, FileText, Calendar, Settings, LogOut } from 'lucide-react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const dashboardItems = [
    {
      title: 'Mes candidatures',
      description: 'Suivez l\'état de vos candidatures aux formations',
      icon: FileText,
      count: 3,
      link: '/dashboard/applications'
    },
    {
      title: 'Formations favorites',
      description: 'Vos formations enregistrées',
      icon: GraduationCap,
      count: 5,
      link: '/dashboard/favorites'
    },
    {
      title: 'Rendez-vous',
      description: 'Vos prochains rendez-vous avec nos conseillers',
      icon: Calendar,
      count: 1,
      link: '/dashboard/appointments'
    },
    {
      title: 'Paramètres',
      description: 'Gérez votre profil et vos préférences',
      icon: Settings,
      count: null,
      link: '/dashboard/settings'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bienvenue, {session.user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {session.user?.email} • {session.user?.role === 'student' ? 'Étudiant' : session.user?.role === 'university' ? 'Université' : 'Entreprise'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card cursor-pointer hover:border-primary transition-colors"
              onClick={() => router.push(item.link)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                {item.count !== null && (
                  <span className="text-2xl font-bold text-primary">{item.count}</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Activité récente</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Candidature envoyée pour Master en Génie Civil
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Nouvelle formation ajoutée aux favorites
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Hier</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Rendez-vous confirmé avec conseiller Nexiom
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Il y a 3 jours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
