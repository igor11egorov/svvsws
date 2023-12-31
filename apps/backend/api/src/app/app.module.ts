import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { environment } from '../environments/environment'
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from './app.resolver'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {
}
