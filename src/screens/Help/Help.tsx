import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { View } from 'react-native';

import { Header } from './components/Header';
import { Help as HelpCard } from './components/Help';

export const Help = () => {
  const {
    theme: { colors },
  } = useTheme();
  const IconFaq = () => <Icons.infoCircleo color={colors.text.primary} />;
  const IconEnvelope = () => (
    <Icons.envelope size={24} color={colors.text.primary} />
  );
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Header />
      <View style={{ flex: 1, paddingHorizontal: 10, marginTop: 10, gap: 10 }}>
        <Text font="Lexend.500" size="xl">
          Ajuda
        </Text>
        <Text font="Lexend.400" size="sm" color="subTitle">
          Precisa de ajuda? Nosso horário de atendimento é de{' '}
          <Text font="Lexend.700" size="sm" color="primary">
            segunda à sábado, das 9h às 17h(BRT)
          </Text>
        </Text>

        <HelpCard
          description="Encontre aqui a resposta para as suas dúvidas"
          title="FAQ"
          icon={<IconFaq />}
        />
        <HelpCard
          description="Escreva como podemos ajudá-lo e nosso time retornará"
          title="Envie sua solicitação"
          icon={<IconEnvelope />}
        />
      </View>
    </SafeAreaView>
  );
};
